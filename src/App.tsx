function App(props: any) {
  return (
    <div className="App">
      <p>Hello World from WebApp 2 -&gt; External text : {props.textValue ? props.textValue : "-"}</p>
      <button onClick={() => props.setTextValue("Love Vaultinum")}>Love Vaultinum</button>
      <button onClick={() => props.setTextValue("Love APP")}>Love APP</button>
    </div>
  );
}

export default App;
