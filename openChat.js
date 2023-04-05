document.getElementById('form').addEventListener('submit', async (event) => {

    
    event.preventDefault();
    const question = document.getElementById('question').value;
    const response =  await fetch('Link a la api de OpenAi', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': API.KEY
      },
      body: JSON.stringify({"model": "escribe el modelo",
      "messages": [{"role": "user", "content": question}],
      "temperature": 0.7})
    }).then((response) => response.json())
    
    .then((data) =>{
      
      document.getElementById('response').innerText = data.choices[0].message.content;

    });
    
  });
