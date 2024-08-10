const { serialize, deserialize } = require("v8");

// Define the photo object
const photo = {
  name: "rabbit",
  height: 1220,
  width: 1440,
  tinyThumbnail: new Uint16Array(100), // Typed array
  mediumThumbnail: new Uint16Array(100), // Typed array
  description: "some string data",
  metaData: {
    tags: ["rabbit", "animal", "runner"],
    type: "image/jpeg"
  }
};

// Serialize the photo object to a buffer
const photoSerializedAsBuffer = serialize(photo);

// Check if the serialized data is a Buffer
if (!Buffer.isBuffer(photoSerializedAsBuffer)) {
  throw new Error('Serialized data is not a Buffer');
}

// Deserialize the buffer back to an object
const deserializedBack = deserialize(photoSerializedAsBuffer);

// Log the deserialized object
console.log(deserializedBack);


/**
### 1. **Format and Purpose**

- **`JSON.stringify`**
    - **Format**: Produces a JSON string.
    - **Purpose**: Converts JavaScript objects into a JSON string format that is human-readable and can be easily transmitted over networks or saved in text files. It’s ideal for data interchange between web services, APIs, and storage systems that understand JSON.
- **`v8.serialize`**
    - **Format**: Produces a binary Buffer.
    - **Purpose**: Serializes JavaScript objects into a binary format that is efficient for storage or transmission in environments where the exact structure and types of data need to be preserved. It supports a broader range of JavaScript data types and structures compared to JSON.

### 2. **Supported Data Types**

- **`JSON.stringify`**
    - **Supports**: Standard JavaScript data types such as objects, arrays, strings, numbers, and booleans.
    - **Does Not Support**: Functions, `undefined`, `Symbol`, `Map`, `Set`, `Buffer`, `Date`, and other non-JSON-native types. These types are either omitted or converted to simple representations (e.g., functions and `undefined` are lost).
- **`v8.serialize`**
    - **Supports**: A wider range of JavaScript data types including typed arrays, `Buffer`, `Date`, `Map`, `Set`, and complex object structures.
    - **Preserves**: The exact type and structure of the object, including non-JSON-native types.

### 3. **Performance**

- **`JSON.stringify`**
    - **Performance**: Generally slower for complex objects and large datasets because it has to convert data to a string representation and is limited by the need to represent data in text format.
- **`v8.serialize`**
    - **Performance**: Typically faster and more efficient for complex objects or large datasets because it uses a binary format which is generally more compact and quicker to process. However, it produces binary data which is not human-readable.

### 4. **Human Readability**

- **`JSON.stringify`**
    - **Human-Readable**: The output is a string in JSON format, which is easy to read and debug manually.
- **`v8.serialize`**
    - **Not Human-Readable**: The output is a binary buffer, which is not directly human-readable but is efficient for programmatic use.

### 5. **Use Cases**

- **`JSON.stringify`**
    - **Use Cases**: Ideal for APIs, configuration files, data interchange, and scenarios where human readability and text-based formats are needed.
- **`v8.serialize`**
    - **Use Cases**: Suitable for scenarios requiring efficient and precise serialization of complex data structures, such as when saving state to disk or transmitting data internally within applications that need to preserve data integrity.

**/
