const UserSchema = new Schema({
    firstName: {
        "Roger"
    },
  
    lastName: {
        "Dalton"
    },
  
    password: {
        "password"
    },
  
    email: {
      "rogerdalton@hwmail.com"
    },
  
    foodItems: [
      {
          foodStorageLocation: {
              type: String,
              required: true
          },
          foodItemName: {
              type: String,
              required: true
          },
          foodItemQuantity: {
              type: Number
          },
          foodItemUnit: {
              type: String
          },
          expirationDate: {
              type: Date,
              required: true
          },
          foodItemDescription: {
              type: String
          },
          foodItemRecipeSuggestions: {
              type: String   
          }
      }
  ]
  
  });
  