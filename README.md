# mirrorbot
Bot for mirroring discord channels.

This bot was purchased originally for mirroring discord content from one channel to another.  I had to accomplish my own edits to get it to work appropriately. Below are the instructions to use the bot.  I am in no way a bot wiz.  I develop on what is available to make it easier for beginners like myself.  If you'd like to support us buy an NFT at https://opensea.io/collection/cryptokidsdaogen1 at a very reasonable price currently (.005 ETH).  It would be greatly appreciated.  


REQUIREMENTS

1.  Visual Studio Code or your preferred code editor.
2.  Updated Powershell:  https://aka.ms/PSWindows
3.  Node.js:  https://nodejs.org/en/
4.  Github account (optional)
5.  Webhost (I used Heroku)
6.  Monitor for Pinging Bot (https://kaffeine.herokuapp.com/)

INSTRUCTIONS

1.  Unzip and Open Mirror Bot folder in your code editor.
2.  Go grab your discord token from from discord web app: https://www.androidauthority.com/get-discord-token-3149920/
3.  Input it into token section between parentheses of the Bot.json file.
4.  Enable developer mode in discord:  https://discord.com/developers/docs/game-sdk/store
5.  Copy ID of channel you want to mirror.  Input it between the parentheses in the Channel ID section of the Bot.json file replacing the words Channel ID #1..
6.  Create a webhook in the channel you want to feed the mirror into.  https://www.socialoomph.com/help/view/help_discord_webhook_how/.  Copy the URL and post it in the quotes following channel ID. 
    Example:"975568510012482570": "https://discord.com/api/webhooks/965817645753005484/lGhHDc7elSyveKOggjm5vQjr1QLN0ab8KUG7xJ17CsETHWnCuYBo2t&OWTZbEm7QF979",
7.  Rinse and repeat in the Bot.json file of however many channels you want.  Note they can feed into the same webhook.
8.  Test on the local network. Open a new terminal and input the following commands:  "npm i" then once that loads run "node main.js".
9.  Confirm your code is running properly.  Now time to take it to a webhost.
10.  Upload code to github.  https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository.  You will need to delete the node modules folder if it won't upload.
11.  Log into your webhost.  Connect your github or input the code into the IDE section.  And run commands.  In the case of heroku once you connect the github file you hit deploy.  

HEROKU INFO

12.  Heroku runs off of Dynos.  If you are only using the one bot and you input your CC info you will get extra Dynos and will never have to worry about over using them.  Make sure you only inpt your CC data no need to buy anything.
13.  I use https://kaffeine.herokuapp.com/ to ping and keep my bot alive otherwise it may die due to inactivity.  In this case just restart the dynos and redeploy.


Things to remember

14.  If you log out and back into your discord account on a device your authorization token will change.  Best to use a discord that is not your main account.  You will then need to redeploy the code with the new token.

15.  Channel ID's change occassionally on Discords when things are moved around.  You will need to copy the new channel ID input it into the Bot.json, restart dynos (if using Heroku) and redeploy the code as necessary.

16. Ensure your app name matches your root folder name.     
