import json
from channels.generic.websocket import AsyncWebsocketConsumer

class AnalysisConsumer(AsyncWebsocketConsumer):
    async def connect(self):
        self.query_id = self.scope['url_route']['kwargs']['query_id']
        self.group_name = f'analysis_{self.query_id}'

        # Join room group
        await self.channel_layer.group_add(
            self.group_name,
            self.channel_name
        )

        await self.accept()

    async def disconnect(self, close_code):
        # Leave room group
        await self.channel_layer.group_discard(
            self.group_name,
            self.channel_name
        )

    # Receive message from room group
    async def analysis_update(self, event):
        # Send message to WebSocket
        await self.send(text_data=json.dumps({
            'status': event['status'],
            'score': event.get('score'),
            'message': event.get('message', '')
        }))
