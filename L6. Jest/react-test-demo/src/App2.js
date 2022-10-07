// App.js

function App2() {
  return (
    <div>
      <form>
        <label htmlFor="fname">First name:</label>
        <br />
        <input type="text" name="fname" data-testid="first-name-input" />
        <br />
        <label htmlFor="lname">Last name:</label>
        <br />
        <input type="text" name="lname" data-testid="last-name-input" />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default App2;
