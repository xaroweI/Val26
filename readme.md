# Valentine's Day 2026 - Instagram Groupchat Confession

The ultimate meta Valentine's confession - an Instagram-style groupchat where she's been helping plan her own surprise THE WHOLE TIME! 🤯❤️

## 🎯 What This Is

An interactive Instagram DM simulation where:
1. She gets notifications (including a hilarious Pornhub one)
2. Opens a groupchat called "bzezel sahli"
3. Reads you and the boys talking (M&M tube story included 💀)
4. Gets to CHOOSE responses at 17 different points
5. Helps "plan" a valentine's confession
6. Realizes SHE is the girl and THIS is the confession
7. Gets asked to be your valentine

## 📁 Files

```
├── index.html      - Main HTML structure
├── style.css       - Instagram-perfect styling
├── script.js       - All the conversation logic
├── group-pic.jpg   - The group chat picture
└── README.md       - This file
```

## 🚀 Quick Setup

1. **IMPORTANT**: Open `script.js` and customize the top section (lines 1-14):
   ```javascript
   const HER_NAME = "babe"; // CHANGE THIS TO HER ACTUAL NAME
   
   // CHARACTER NAMES - Change these to whatever you want!
   const CHAR1_NAME = "Gay_Femboy";
   const CHAR2_NAME = "Big_dick_randy";
   const CHAR3_NAME = "3abdallah";
   const CHAR4_NAME = "Sahli";
   const YOUR_NAME = "ahmed";
   ```

2. Replace `group-pic.jpg` with the image you want (already done with your uploaded pic)

3. Open `index.html` in a browser

4. Send her the link!

## ✨ Features

- 📱 **Lock Screen** - Starts with iPhone lock screen + notifications
- 💬 **Auto Messages** - Messages appear with 0.8s delay + typing indicators
- 🎮 **17 Interactions** - She chooses responses 17 times throughout
- 😂 **Emoji Reactions** - Long-press (mobile) or hover (desktop) to react
- 🤯 **Inception Reveal** - The meta moment when she realizes
- ❤️ **Final Question** - "Will you be my valentine?" with YES/NO
- 🎉 **Confetti** - Celebration if she says yes
- 🥺 **Second Chance** - If she says no, gives her another chance

## 🎭 The Cast (Customizable!)

All character names can be changed at the top of `script.js`:

- **CHAR1_NAME** (default: Gay_Femboy) - The chaos agent
- **CHAR2_NAME** (default: Big_dick_randy) - The M&M tube guy 💀
- **CHAR3_NAME** (default: 3abdallah) - The level-headed one
- **CHAR4_NAME** (default: Sahli) - The hype man
- **YOUR_NAME** (default: ahmed) - You (the romantic)
- **HER_NAME** - The player

## 📝 Conversation Flow

### Phase 0: Normal Guy Talk (3 interactions)
- Randy's M&M tube story
- Pure chaos and banter

### Phase 1: Valentine's Day (1 interaction)
- Someone mentions Valentine's Day
- You say "well actually..."

### Phase 2: The Confession About Her (2 interactions)
- You describe the girl you like
- "She would eat rocks if they weren't so hard"
- The boys are hyped

### Phase 3: Planning How to Confess (6 interactions)
- Brainstorming ideas
- Flowers? Chocolates? Website?
- You suggest making a groupchat website

### Phase 4: The Inception Reveal (2 interactions)
- Planning what the groupchat would be called
- "What about 'bzezel sahli'?"
- "Wait... that's THIS groupchat's name"
- 🤯 MIND BLOWN

### Phase 5: The Ask (3 interactions)
- You reveal it was all for her
- Every choice she made was helping plan her own surprise
- "Will you be my valentine?"

## 🎨 Customization

### Change Character Names
At the top of `script.js` (lines 10-14):
```javascript
const CHAR1_NAME = "Gay_Femboy";      // Change to any name you want
const CHAR2_NAME = "Big_dick_randy";  // Change to any name you want
const CHAR3_NAME = "3abdallah";       // Change to any name you want
const CHAR4_NAME = "Sahli";           // Change to any name you want
const YOUR_NAME = "ahmed";            // Your name
```

The avatars will automatically update based on the names!

### Change Timing
```javascript
// In script.js, lines 3-4
const MESSAGE_DELAY = 800;      // Time between messages (milliseconds)
const TYPING_DURATION = 1500;   // How long typing shows
```

### Add/Edit Messages
The entire conversation is in the `CONVERSATION` array in `script.js`. Each message is:
```javascript
{ type: 'message', sender: 'ahmed', text: 'your text here' }
```

### Add/Edit Choices
```javascript
{
    type: 'choice',
    options: [
        { 
            text: 'choice text', 
            reactions: [
                { sender: 'ahmed', emoji: '❤️' },
                { sender: 'Sahli', text: 'response text' }
            ]
        },
        // ... 3 more options
    ]
}
```

## 💡 Pro Tips

1. **Test it yourself first** - Go through the whole thing to make sure it works
2. **Check her name** - Make sure you changed `HER_NAME` in script.js
3. **Mobile matters** - Most people will view on phones, it's optimized for that
4. **Group pic** - Use a funny/memorable pic for the group chat icon
5. **Timing** - Send it at a good time when she can actually go through it

## 🐛 Troubleshooting

**Messages not appearing?**
- Check browser console for errors (F12)
- Make sure all files are in the same folder

**Images not loading?**
- group-pic.jpg must be in the same folder as index.html
- Check the file extension is .jpg (not .png or .jpeg)

**It's not mobile friendly?**
- It is! Just make sure you're opening the actual HTML file
- Try different browsers (Chrome/Safari work best)

**Want to reset and replay?**
- Just refresh the page (F5)

## 📱 How to Host Online (Optional)

If you want to send her a link instead of the files:

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Enable GitHub Pages
5. Share the URL it gives you

### Option 2: Netlify (Free)
1. Go to netlify.com
2. Drag and drop the whole folder
3. Get instant URL

### Option 3: Just send the files
1. Zip all files together
2. Send her the zip
3. She opens index.html in a browser

## 🎬 The Script

The full conversation is in `script.js` with:
- Randy's butter M&M tube incident
- Valentine's Day discussion
- Your confession about the perfect weird girl
- Planning the confession together
- The inception reveal
- The final ask

Every line of dialogue is customizable!

## ⚠️ Important Notes

- The Pornhub notification is a JOKE (no actual porn)
- Make sure she has a sense of humor about the M&M story
- The whole thing takes about 10-15 minutes to go through
- She can react with emojis to any message (long-press on mobile)
- Her choices affect which reactions she gets from the boys

## 💝 Final Checklist

Before sending:
- [ ] Changed HER_NAME in script.js (line 7)
- [ ] Changed character names if you want (lines 10-14 in script.js)
- [ ] Replaced group-pic.jpg with your image
- [ ] Tested it yourself (went through the whole thing)
- [ ] Checked it works on mobile
- [ ] Ready for either answer (yes or no)

## 🎉 Good Luck!

You've got this! This is creative, funny, and shows effort. Whether she says yes or no, you shot your shot in the coolest way possible.

Happy Valentine's Day! ❤️

---

Made with love (and way too much JavaScript) for Valentine's Day 2026
