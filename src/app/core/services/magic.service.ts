import axios from 'axios';
import { Injectable } from '@angular/core';
import { Magic } from '../models/models';

const API_BASE_URL = 'http://localhost:8080/magics';

@Injectable({
  providedIn: 'root',
})
export class MagicService {
  async getAllMagics(page = 0, size = 20) {
    return axios.get(`${API_BASE_URL}?page=${page}&size=${size}`);
  }

  async getMagicById(id: string) {
    return axios.get(`${API_BASE_URL}/${id}`);
  }

  async createMagic(magicData: Magic) {
    return axios.post(`${API_BASE_URL}`, magicData);
  }

  async updateMagic(id: string, magicData: Magic) {
    return axios.put(`${API_BASE_URL}/${id}`, magicData);
  }

  async deleteMagic(id: string) {
    return axios.delete(`${API_BASE_URL}/${id}`);
  }
}
