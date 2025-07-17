const Waitlist = () => {

    return(
        <div className="waitlist">
            <h1>Join Our Waitlist</h1>

        <form>

          <label for="">Email</label>
          <input
            type="email"
            id="email"
            className="email"
            placeholder="Input Email"
          />
          <p className="pass-error2 error"></p>

          <label for="">Phone Number</label>
          <input
            type="number"
            id="number"
            className="number"
            placeholder="Input Phone No"
          />

          <label for="">First Name</label>
          <input type="text" className="name" placeholder="Input First Name" />

          <label for="">Last Name</label>
          <input
            type="text"
            id="name"
            className="name"
            placeholder="Input Last Name"
          />


          <label for="">Genotype</label>
          <input
            type="text"
            id="name"
            className="name"
            placeholder="Input Genotype"
          />

        <label for="">Blood Group</label>
          <input
            type="text"
            id="name"
            className="name"
            placeholder="Input Blood Group"
          />

          
          <button className="Btn btn1" id="btn">Submit</button>
        </form>
        </div>
    )
}
export default Waitlist;