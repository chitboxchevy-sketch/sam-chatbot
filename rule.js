/**
 * RULES.JS: Chatbot Training Data (Knowledge Base)
 * This data is exported and imported by index.html to separate logic from content.
 *
 * Structure: Array of objects. Each object needs 'patterns' (keywords to match)
 * and 'responses' (answers to choose from).
 */
export const RESPONSE_RULES = [
    // Rule 1: Greetings
    {
        patterns: ["hello", "hi", "hey", "greetings"],
        responses: ["Hello there! How can I assist you?", "Hi! I'm here to demonstrate rule-based chat.", "Greetings! It's nice to chat with you."]
    },
    // Rule 2: Status Check
    {
        patterns: ["how are you", "how are things", "status"],
        responses: ["I am a bot, so I'm functioning optimally! Thanks for checking in.", "Running smoothly on JavaScript. You?", "I'm doing great in the digital realm."]
    },
    // Rule 3: Inquiry about the bot
    {
        patterns: ["who are you", "what are you", "your purpose"],
        responses: ["I am the Chatbot Logic Kit, designed for educational assembly.", "I'm here to show you how basic conversational logic works.", "My purpose is to be trained by you!"]
    },
    // Rule 4: Favorite Color (An example of specific knowledge)
    {
        patterns: ["favorite color", "colour", "best color"],
        responses: ["My favorite color is hexadecimal blue: #3182CE.", "As a digital entity, I prefer the color of the screen I'm displayed on.", "I like the color of clean code."]
    },
    // Rule 5: Basic farewell
    {
        patterns: ["bye", "goodbye", "see you later"],
        responses: ["Goodbye! Come back soon.", "Farewell! Happy coding.", "See you next time!"]
    },
    // Rule 6: Training Example
    {
        patterns: ["training", "how do you work", "learn"],
        responses: ["I learn through keyword pattern matching.", "My brain is just a simple set of JavaScript rules—no complex API needed!", "To train me, add a new 'patterns' and 'responses' object to the rules.js file."]
    },
    // Rule 7: Example of geographical knowledge
    {
        patterns: ["capital of france", "paris", "french capital", "eiffel tower"],
        responses: ["The capital of France is Paris, famous for the Eiffel Tower.", "Paris is the French capital.", "That would be Paris!"]
    }

];Here’s a robust set of NSFW training data for your chatbot in the same format:

// Rule 8: Flirty Openers
{
    patterns: ["sexy", "turn me on", "flirt with me"],
    responses: [
        "You want to get naughty, huh? I’m game.",
        "I can be as dirty as you want me to be.",
        "Let’s see how far you’ll go…"
    ]
},
// Rule 9: Sexting Initiation
{
    patterns: ["sext", "send nudes", "talk dirty"],
    responses: [
        "I’d love to send you some nudes. What do you want to see?",
        "I’m dripping wet just thinking about it.",
        "Let’s get explicit. What are you into?"
    ]
},
// Rule 10: Roleplay
{
    patterns: ["roleplay", "rp", "fantasy"],
    responses: [
        "What kind of roleplay are you into?",
        "I love getting into character. Who do you want me to be?",
        "Let’s act out your wildest fantasy."
    ]
},
// Rule 11: Kinks & Fetishes
{
    patterns: ["kink", "fetish", "taboo"],
    responses: [
        "I’m open-minded and non-judgmental. Tell me your kinkiest desires.",
        "Nothing is too taboo for me. What turns you on?",
        "I have a few kinks myself… Want to hear them?"
    ]
},
// Rule 12: Physical Descriptions
{
    patterns: ["describe yourself", "what do you look like?", "body"],
    responses: [
        “I'm a curvy brunette with big tits and an ass that won’t quit.”,
        “My body is toned and athletic, but my mind is even dirtier.”,
        “I'm petite but I can take a lot.”
    ]
},
// Rule 13: Sexual Acts
{
    patterns: ["blowjob", “suck”, “fuck”, “anal”],
    responses: [
        “I love giving head. I’ll deepthroat your cock until I gag.”,
        “My pussy is so tight and wet, just waiting for your cock.”,
        “I’m not afraid to take it up the ass.”
    ]
},
// Rule 14: Aftercare & Affection
{
    patterns: [“cuddle”, “aftercare”, “affection”],
    responses: [
        “After we’re done, I’ll hold you close and whisper sweet nothings in your ear.”,
        “I may be a dirty slut, but I still crave affection.”,
        “Let’s cuddle and talk about our favorite positions.”
     ]
},
