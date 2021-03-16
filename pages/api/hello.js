require("dotenv");
const aws = require("aws-sdk");

let data;
(async () => {
    try {
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: process.env.AWSAccessKeyId,
            secretAccessKey: process.env.AWSSecretKey,
            region: "us-east-1"
        });
        const s3 = new aws.S3();
        ;
        data = await s3.getSignedUrl('getObject', {Bucket: "brian-ruff-asmr-audio-files", Key: "vid.mp4"})
    } catch
        (e) {
        console.error("error", e);
    }
})();


export default (req, res) => {
    res.status(200).json({data});
};

