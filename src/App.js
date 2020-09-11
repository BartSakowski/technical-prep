import React, { Component } from "react";

export class App extends Component {
  sampleOrders = [
    {
      tableNumber: 1,
      items: [
        {
          itemName: "coffee",
          quantity: 2,
        },
        {
          itemName: "donuts",
          quantity: 6,
        },
      ],
    },
    {
      tableNumber: 2,
      items: [
        {
          itemName: "bagel",
          quantity: 1,
        },
      ],
    },
  ];

  Orders = () => {
    return (
      <>
        <div>Table 1 - 8 items</div>
        <div>Table 2 - 1 item</div>
      </>
    );
  };

  render() {
    return <div>{this.Orders()}</div>;
  }
}
export default App;

// const rootElement = document.getElementById("root");
// ReactDOM.render(<Orders data={sampleOrders} />, rootElement);

// import React, { Component } from "react";

// export class App extends Component {
//   state = {
//     bold: ""
//   };

//   handleClick = (e) => {
//     this.setState({
//       bold: e
//     })
//   };

//   render() {
//     return (
//       <>
//         <button id="elementA" style={{fontWeight: `${this.state.bold === "A" ? "bold" : ""}`}} onClick={() => this.handleClick("A")}>
//           Element A
//         </button>
//         <br></br>
//         <button id={"elementB"} style={{fontWeight: `${this.state.bold === "B" ? "bold" : ""}`}} onClick={() => this.handleClick("B")}>
//           Element B
//         </button>
//       </>
//     );
//   }
// }

// export default App;

// import React, { Component } from "react";

// export class App extends Component {
//   state = {
//     A: "",
//     B: "",
//   };

//   handleClickA = () => {
//     this.setState({
//       A: "bold",
//       B: ""
//     })
//   };

//   handleClickB = () => {
//     this.setState({
//       A: "",
//       B: "bold"
//     })
//   };

//   render() {
//     return (
//       <>
//         <button style={{fontWeight: `${this.state.A}`}} onClick={this.handleClickA}>
//           Element A
//         </button>
//         <br></br>
//         <button style={{fontWeight: `${this.state.B}`}} onClick={this.handleClickB}>
//           Element B
//         </button>
//       </>
//     );
//   }
// }

// export default App;
