import React from 'react'
import { uploadFiles } from '../../Firebase/firebase-config'

export default function PrivateHome() {
    const fileUploadHandler = (e) => {

        const files = [...e.target.files]
        console.log('files', files)
        files.forEach(file => uploadFiles(file))
    }
    return (
        <div>
            <h1>Private-home</h1>
            <div className="disk_upload">
                <label htmlFor="diskUploadInput" className="disk_uploadLabel" />
                <input
                    onChange={(e) => fileUploadHandler(e)} multiple={true}
                    type="file" id='diskUploadInput' className="diskUploadInput" />
            </div>
        </div>

    )
}
