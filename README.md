# Scope

This is a small react app, that is using [Livechat.com SDK](https://developers.livechat.com/docs/extending-agent-app/products-sdk/agent-app-sdk) in order to create a small widget that is embeded in livechat BO and adds a direct link to ArcaneBet backoffice that search for a customer based on the email address of the client from livechat app.

# Build and Hosting

This app is hosted in Arcanebet's AWS stage account (139952088230) using AWS Amplify.
Any push to the main branch will trigger a redeploy of the app.
App can be accesssed here: https://main.d1f69oqgei212y.amplifyapp.com/ (but it will show nothing if not accessed as iframe inside livechat.com BO)

The app is configured in [livechat console](https://developers.livechat.com/console/apps) using AB corporate account.

