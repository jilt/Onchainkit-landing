# Onchainkit-landing
Simple Memecoin Landing page with 3D visualizer, built with Onchainkit, default Base config
Find the onchainkit version in the onchainkit branch, the main branch is for the preview on vercel.

## Add you 3D logo
After copying Model.glb on /public/models/items/ run the command from the project source folder: 
`npx gltfjsx public\models\items\Model.glb`
This will create a file Model.jsx on that same folder, move it to the components folder and edit the file extension to .tsx, and adjust the internal paths to load the right .glb file path, then call the model.tsx file from Experience.tsx

## Other preps
1) edit the .env with your coinbase api key
2) edit links with your socials and team's links
3) css are not bundles you can access everything from globals.css
