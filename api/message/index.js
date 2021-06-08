module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    context.res.json({
        // status: 200, /* Defaults to 200 */
        text: "Hello from API called from static web app"
    });
}