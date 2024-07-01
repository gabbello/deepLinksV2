# Scope

This is a small react app, that is using [Livechat.com SDK](https://developers.livechat.com/docs/extending-agent-app/products-sdk/agent-app-sdk) in order to create a small widget that is embeded in livechat BO and adds a direct link to THBet casino backoffices that search for a customer based on the email address of the client from livechat app.

Basically it adds this button:
![image](https://github.com/arcanebet/react-livechat-app/assets/2505749/2e87b6dc-e077-48a1-8640-5e56148353f4)



# Build and Hosting

This app is hosted in Arcanebet's AWS stage account (139952088230) using AWS Amplify.
Any push to the main branch will trigger a redeploy of the app.
App can be accesssed here: https://main.d1rep20ygxxjw4.amplifyapp.com/ (but it will show nothing if not accessed as iframe inside livechat.com BO)

The app is configured in [livechat console](https://developers.livechat.com/console/apps) using AB corporate account.

