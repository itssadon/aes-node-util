const CryptoJS = require('crypto-js')

module.exports.decryptObject = (req, res) => {
    if (!req.body.EncryptionData || !req.body.secretKey) {
        return res.status(400).send({
            success: false,
            code: 400,
            message: 'Missing details required for decryption.',
            developerMessage: 'Check that all required fields (EncryptionData and secretKey) have been provided.'
        })
    }

    try {
        let secretKey = req.body.secretKey
        let ciphertext = req.body.EncryptionData
        console.log('1: EncryptionData', ciphertext)

        let bytes = CryptoJS.AES.decrypt(ciphertext.toString(), secretKey)
        console.log('2: Bytes', bytes)

        let decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
        req.body = decryptedData
        console.log('3: Object', req.body)

        return res.status(200).send({
            success: true,
            code: 200,
            message: 'Decryption was successful.',
            data: decryptedData
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            code: 500,
            message: 'An error occured.',
            developerMessage: error
        })
    }
}

module.exports.encryptObject = (req, res) => {
    if (!req.body.requestObj || !req.body.secretKey) {
        return res.status(400).send({
            success: false,
            code: 400,
            message: 'Missing details required for decryption.',
            developerMessage: 'Check that all required fields (requestObj and secretKey) have been provided.'
        })
    }

    try {
        let requestObj = req.body.requestObj
        let secretKey = req.body.secretKey
        console.log('1: RequestObj', requestObj)

        let encryptedData = CryptoJS.AES.encrypt(JSON.stringify(requestObj), secretKey)
        console.log('2: EncryptedData', encryptedData.toString())

        return res.status(200).send({
            success: true,
            code: 200,
            message: 'Encryption was successful.',
            data: encryptedData.toString()
        })
    } catch (error) {
        return res.status(500).send({
            success: false,
            code: 500,
            message: 'An error occured.',
            developerMessage: error
        })
    }
}