import React, { Component } from "react";
import { CKEditor, CKEditorContext } from '@ckeditor/ckeditor5-react';
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./NewPost.scss"

export class CreateNewPost extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <>
                <div className="box2">
                    <div class="card">
                        <div class=" wrapper main-wrapper row" style={{ padding: "50px 20px" }}>
                            <div className="col-md-8">
                                <h1>Create New Post</h1>
                                <label>Title</label>
                                <input type="text" className="form-control" id="field-1" />
                                <div class="col-md-20">
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
                                            }} />

                                        <div class="col-md-14">
                                            <label>Description</label>
                                            <input type="text" className="form-control" id="field-1" />
                                        </div>

                                        {/* </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Thumnail" >
                    <div class="col-lg-12">
                        <div class="card" style={{ padding: "20px 30px" }}>
                            {/* <div class="card-body"> */}
                            <label>Thumnail</label>
                            <div
                                class="img-affa-wrapper text-center no-mb mt-15"
                                style={{ padding: "50px 50px" }}>
                                <div className="">
                                    <i />
                                    <a href="#myModal" data-toggle="modal">
                                        <h4 className="no-mb mt-20">Up Load Image</h4>
                                    </a>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="Topics">
                    <div class="col-md-20">
                        <div class="card" style={{ padding: "20px 50px" }}>
                            <div class="card-body">
                                <label>Topics</label>  
                                <input type="text" className="form-control" id="field-1" />
                                <label>Readtime</label>  
                                <input type="text" className="form-control" id="field-1" />
                                <button class="btn btn-primary">Go </button>
                                
                                
                            </div>
                        </div>
                    </div>
                    </div>
                </>
                )
    }
}