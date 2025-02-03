import axios from 'axios';
import { Injectable } from '@angular/core';
import { Feature } from '../models/models';

const API_BASE_URL = 'http://localhost:8080/features';

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  async getAllFeatures(page = 0, size = 20) {
    return axios.get(`${API_BASE_URL}?page=${page}&size=${size}`);
  }

  async getFeatureById(id: string) {
    return axios.get(`${API_BASE_URL}/${id}`);
  }

  async createFeature(featureData: Feature) {
    return axios.post(`${API_BASE_URL}`, featureData);
  }

  async updateFeature(id: string, featureData: Feature) {
    return axios.put(`${API_BASE_URL}/${id}`, featureData);
  }

  async deleteFeature(id: string) {
    return axios.delete(`${API_BASE_URL}/${id}`);
  }
}
