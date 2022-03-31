import React from "react";
import { Component } from "react";
import axios from "axios";


export class UploadFile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }
    }

    handleFileChange = (event) => {
        this.setState({
            selectedFile: event.target.files[0]
        });
    }

    onFileUpload = async () => {
        let formData = new FormData();
        formData.append(
            'myFile',
            this.state.selectedFile,
            this.state.selectedFile.name
        );
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: formData
        // };
        // await fetch('https://localhost:44340/api/test-upload-file', requestOptions)
        //     .then(res => res.json())
        //     .then(res => {
        //         console.log(res);
        //     })
        await axios.post('https://localhost:44340/api/test-upload-file', formData,  {
            headers: {
                'Content-Type': this.state.selectedFile.type
            }
          });
    }

    render() {
        return(
            <>
                <input type="file" placeholder="File" onChange={this.handleFileChange} />
                <button onClick={this.onFileUpload}>Upload</button>
            </>
        )
    }
}