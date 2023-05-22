const urlProfessor = 'http://profkaz-api.keepinvest.com.br';

class ApiService {
  async post(endpoint, data) {
    const url = `${urlProfessor}/${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const jsonData = await response.json();
        return jsonData;
      } else {
        throw new Error('Request falhou');
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async get(endpoint, token) {
    const url = `${urlProfessor}/${endpoint}`;

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${token}`
        },
      });

      if (response.ok) {
        const jsonData = await response.json();
        return jsonData;
      } else {
        throw new Error('Request falhou');
      }
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default new ApiService();
