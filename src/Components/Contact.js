const Contact = () => {
  return (
    <div>
      <h1 className="font-extrabold p-2 m-2 text-center">Contact Us</h1>
      <form className="text-center">
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="name"
        />
        <input
          type="text"
          className="border border-black p-2 m-2"
          placeholder="message "
        />
        <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
