const LocalStorage = {
    setItem: (key, value) => {
      return new Promise((resolve, reject) => {
        try {
          localStorage.setItem(key, JSON.stringify(value));
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  
    getItem: (key) => {
      return new Promise((resolve, reject) => {
        try {
          const value = localStorage.getItem(key);
          resolve(JSON.parse(value));
        } catch (error) {
          reject(error);
        }
      });
    },
  
    removeItem: (key) => {
      return new Promise((resolve, reject) => {
        try {
          localStorage.removeItem(key);
          resolve();
        } catch (error) {
          reject(error);
        }
      });
    },
  };
  
  export default LocalStorage;
  