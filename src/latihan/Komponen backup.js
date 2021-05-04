import {Component} from 'react';

class Komponen extends Component {
    state = {
        isShow: true,
      };
    state = {
        subTitle: "welcome",
      };
    handleChange = () => {
        this.setState({subTitle:"selamat datang"});
    };
    componentDidMount(){
        console.log("render Did Mount dijalankan");
    }
    componentDidUpdate(){
        console.log("render Did Update dijalankan");
    }
    componentWillUnmount(){
        console.log("render Did Unmount dijalankan");
    }
    render(){
        console.log("render dijalankan");
        const {title, students} = this.props;
        return(
            <div>
                   <h3>{title}</h3>
                   <h3>{this.state.subTitle}</h3>
              <ul>
                     {
                       students.map((student) => {
                       return<li>{student.nama}</li>
                     })
                     }
              </ul>
              <ul>
                     {
                       this.props.students.map((student) => {
                       return<li>{student.address}</li>
                     })
                     }
              </ul>
              <button onClick ={this.handleChange}>change button</button>
            </div>
        );
    }
}

export default Komponen;