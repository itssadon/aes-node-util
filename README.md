# PROGRAM NAME: Stand-alone AES Admin Encrypter
## AUTHOR: Abubakar Hassan
## DATE: Mon. 30th March 00:33

# DESCRIPTION:
This program lets you encrypt plain text using the AES algorithm. It is a node api application that accepts post requests as follows:

The galaxy API requires that all data send to the API be encrypted using AES. In addition to the other required headers the key used to encrypt the data also has to be sent to the server as a header.
The encrypted data is sent in the body of the API call as a JSON object with a single field named "EncryptionData". See example below of how the encrypted data needs to be packaged as a JSON object as part of the requirements for sending a valid call to the galaxy API:

# RUNNING THE TOOL:
Run the bash script for your platform to build and run the application in a container.

## Encryption
- Request URL: http://localhost:4545/encrypt/object
- Method: POST
- Body params:
{
    "requestObj": {
        "facilityId": "5def85822814d220bcef84e8",
        "numberOfFACs": "4",
        "language": "en"
    },
    "secretKey": "1234564y56yw45tw45tyw4twqtg"
}

## Decryption
- Request URL: http://localhost:4545/decrypt/object
- Method: POST
- Body params:
{
    "EncryptionData": "U2FsdGVkX19ZN2maOshmvPXUY+RlO9iV3sTEnAVs8F0=",
    "secretKey": "1234564y56yw45tw45tyw4twqtg"
}

