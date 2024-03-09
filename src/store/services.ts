import axios from "axios";

import { LoginType, UserType, RegisterType } from "./users/types";
import { TrainingsType } from "./trainings/types";

const baseURL = "http://localhost:3080/api";

export const userAPI = {
  addUserToServer: async (credentials: RegisterType) => {
    try {
      console.log(credentials);
      return await axios.post(`${baseURL}/users`, credentials);
    } catch (error) {
      console.error("Registration error:", error);
      throw error;
    }
  },
  getUserInfo: async (userName: string) => {
    try {
      const result = await axios.get(`${baseURL}/users/${userName}`);
      return result;
    } catch (error) {
      console.error("Registration error:", error);
    }
  },
  updateUserOnServer: async (ID: string, credentials: UserType) => {
    try {
      return await axios.put(`${baseURL}/users/${ID}`, credentials);
    } catch (error) {
      console.error("Error updating user:", error);
    }
  },
  login: async (credentials: LoginType) => {
    try {
      return axios.post(`${baseURL}/login`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },
  deleteUserFromTheServer: async (ID: string) => {
    try {
      return await axios.delete(`${baseURL}/users/${ID}`);
    } catch (error) {
      console.error("Deleting user error:", error);
      throw error;
    }
  },
};

export const studentsAPI = {
  fetchAllStudents: async () => {
    try {
      const response = await axios.get(`${baseURL}/students`);
      return response.data;
    } catch (error) {
      console.error("Error fetching students:", error);
      throw error;
    }
  },
  updateStudentOnServer: async (ID: string, credentials: any) => {
    try {
      return await axios.put(`${baseURL}/students/${ID}`, credentials);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  },
};

export const trainersAPI = {
  fetchAllTrainers: async () => {
    try {
      const response = await axios.get(`${baseURL}/trainers`);
      return response.data;
    } catch (error) {
      console.error("Error fetching trainers:", error);
      throw error;
    }
  },
  updateTrainerOnServer: async (ID: string, credentials: any) => {
    try {
      return await axios.put(`${baseURL}/trainers/${ID}`, credentials);
    } catch (error) {
      console.error("Error updating trainer:", error);
    }
  },
};

export const trainingsAPI = {
  fetchAllTrainings: async () => {
    try {
      const response = await axios.get(`${baseURL}/trainings`);
      return response.data;
    } catch (error) {
      console.error("Error fetching trainings:", error);
      throw error;
    }
  },
  addTrainingToServer: async (credentials: TrainingsType) => {
    try {
      return await axios.post(`${baseURL}/trainings`, credentials);
    } catch (error) {
      console.error("Error adding training:", error);
      throw error;
    }
  },
};

export const specializationsAPI = {
  fetchAllSpecializations: async () => {
    try {
      const response = await axios.get(`${baseURL}/specializations`);
      return response.data;
    } catch (error) {
      console.error("Error fetching specializations:", error);
      throw error;
    }
  },
};

export const trainingTypesAPI = {
  fetchAllTrainingTypes: async () => {
    try {
      const response = await axios.get(`${baseURL}/trainingTypes`);
      return response.data;
    } catch (error) {
      console.error("Error fetching training types:", error);
      throw error;
    }
  },
};
