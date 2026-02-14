import api from '../lib/api';

export interface AnalysisResponse {
    query_id: number;
    task_id: string;
    message: string;
}

export interface AnalysisResultData {
    id: number;
    status: 'PENDING' | 'PROCESSING' | 'COMPLETED' | 'FAILED';
    ivm_score?: number;
    niche: string;
    raw_data?: any;
    created_at: string;
    updated_at: string;
}

export const AnalysisService = {
    /**
     * Start a new analysis task
     */
    startAnalysis: async (niche: string, location: string = 'US'): Promise<AnalysisResponse> => {
        const response = await api.post<AnalysisResponse>('/analysis/', { niche, location });
        return response.data;
    },

    /**
     * Get the status of an analysis
     */
    getAnalysisStatus: async (id: string): Promise<AnalysisResultData> => {
        const response = await api.get<AnalysisResultData>(`/analysis/${id}/status/`);
        return response.data;
    }
};
