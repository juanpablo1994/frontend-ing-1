import React from 'react'
import { Button, Form, FormGroup, Input, Label } from 'reactstrap'
import axios from 'axios'

class NuevaRecarga extends React.Component {
    state = {

        NombreProducto:"",
        stock: "",
        precio: "",

    };

componentDidMount() {
    if (this.props.recarga) {
        const { NombreProducto, stock, precio } = this.props.recarga;
        this.setState({ NombreProducto, stock, precio })
    }
}

onChange = e => {
    this.setState({ [e.target.name]: e.target.value })
}

crearRecarga = e => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/Inventario_recarga/', this.state).then(() => {
        this.props.resetState()
        this.props.toggle()
    })
}


valorDefault = value => {
    return value === "" ? "" : value;
}

render() {
    return(
        <Form onSubmit={this.crearRecarga}>
            <FormGroup>
                <Label for="nombre producto">nombre producto:</Label>
                <Input type="select" name="rol" onChange={this.onChange} value={this.valorDefault(this.state.rol)}>
                    <option>Galón de 15 kilos</option>
                    <option>Galón de 45 kilos</option>
                    <option>Galón de 90 kilos</option>
                </Input>
            </FormGroup>
            <FormGroup>
                <Label for="cantidad">Cantidad:</Label>
                <Input type="text" name="cantidad" onChange={this.onChange} value={this.valorDefault(this.state.cant)}/>
            </FormGroup>
            <Button>Confirmar</Button>
        </Form>

    )
}

}

export default NuevaRecarga