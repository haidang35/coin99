import React, { Component } from "react";
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

export class CreateNewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div class=" wrapper main-wrapper row">
                    <div className="col-md-8">
                        <h1>Create New Post</h1>
                        <label>Title</label>
                        <input type="text" className="form-control" id="field-1" />
                    </div>
                    <div className="col-md-3">
                        <label>Title</label>
                        <input type="text" className="form-control" id="field-1" />
                        <button className="btn btn-danger">ad</button>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="App">
                        <CKEditor
                            editor={ClassicEditor}
                            data="<p>Hello from CKEditor 5!</p>"
                            onReady={editor => {

                                console.log('Editor is ready to use!', editor);
                            }}
                            onChange={(event, editor) => {
                                const data = editor.getData();
                                console.log({ event, editor, data });
                            }}
                            onBlur={(event, editor) => {
                                console.log('Blur.', editor);
                            }}
                            onFocus={(event, editor) => {
                                console.log('Focus.', editor);
                            }}/>
                        <div className="col-md-12">
                            <label>Description</label>
                            <input type="text" className="form-control" id="field-1" />
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-sm-5 col-xs-12">
                    <div
                        className="img-affa-wrapper text-center no-mb mt-15"
                        style={{ padding: "50px 20px" }}>
                        <div className="">
                            <i/>
                            <a href="#myModal" data-toggle="modal">
                                <h4 className="no-mb mt-20">Up Load Image</h4>
                            </a>
                        </div>
                    </div>
                    <div
                        aria-hidden="true"
                        role="dialog"
                        tabIndex={-1}
                        id="myModal"
                        className="modal fade"
                        style={{ display: "none" }}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header gradient-blue">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}