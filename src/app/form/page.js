export default function Form() {
    return (
      <form action="https://script.google.com/macros/s/AKfycbwQ-1YceM31L4i2rQw_0ZKC7sfYySnN8UVQpkDLU4o/dev" method="post">
        <label htmlFor="first">First Name</label>
        <input type="text" id="first" name="first" required />
   
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="surname" required />
        <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="department" required />
          <label htmlFor="last">Last Name</label>
        <input type="text" id="last" name="number" required />
        <button type="submit">Submit</button>
      </form>
    )
  }