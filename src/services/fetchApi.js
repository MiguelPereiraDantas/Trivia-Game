export const fetchToken = async () => {
    const resolve = await fetch('https://opentdb.com/api_token.php?command=request');
    const data = await resolve.json();
    return data.token;
  };
  
  export const fetchQuestions = async (token) => {
    const resolve = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const data = await resolve.json();
    return data;
  };
  
  export const saveToken = () => fetchToken().then((response) => {
    localStorage.setItem('token', response);
  });