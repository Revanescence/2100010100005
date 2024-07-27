export const fetchNumbers = async (numberId) => {
    try {
      const response = await fetch(`http://20.244.56.144/test/${numberId}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Failed to fetch numbers:", error);
      return null;
    }
  };
