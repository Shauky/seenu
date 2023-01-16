class App extends React.Component 
  {
    render()
    {
      return (
            <h1>And another menu</h1>
          );
      }
    }

    let content = App;

    const user = {
      title: 'culture',
      imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
      imageSize: 90,
    };
    
  ReactDOM.render(
    React.createElement(content, {}), 
    document.getElementById('root-menu')
    );
  //testing if document ready
  
