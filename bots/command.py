from chatterbot import ChatBot
from chatterbot.trainers import ChatterBotCorpusTrainer, ListTrainer

# Create a chatbot with a name and disable learning after training
chatbot = ChatBot(
    "SarcasticBot",
    storage_adapter="chatterbot.storage.SQLStorageAdapter",
    database_uri="sqlite:///chatbot_db.sqlite3"
)

# Train the chatbot
trainer = ChatterBotCorpusTrainer(chatbot)
trainer.train("chatterbot.corpus.english")  # Loads general English responses

# Custom personality training (Sarcastic mode)
custom_trainer = ListTrainer(chatbot)
custom_conversations = [
    "Hello",
    "Oh, great. Another human. Hi, I guess.",
    "How are you?",
    "I'm an AI, I don't feel things. But thanks for asking.",
    "Tell me a joke",
    "Why don't robots argue? Because they can't find a logic error.",
    "Goodbye",
    "Finally! I thought you'd never leave."
]

custom_trainer.train(custom_conversations)

# Function to interact with the chatbot
def chat():
    print("SarcasticBot: Oh no, another conversation... Type 'quit' to leave.")

    while True:
        user_input = input("You: ").lower()
        
        if user_input == "quit":
            print("SarcasticBot: Oh, you're leaving? What a shocker. Bye!")
            break
        
        response = chatbot.get_response(user_input)
        print("SarcasticBot:", response)

chat()
