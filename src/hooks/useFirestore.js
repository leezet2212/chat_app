import React, { useState } from "react";
import { db } from "../firebase/config";

const UseFirestore = (collection, condition) => {
  const [documents, setDocuments] = useState([]);

  React.useEffect(() => {
    let collectionRef = db.collection(collection).orderBy("createAt");
    //condition
    // {
    //     fieldName:'abc',
    //     operator: '==',
    //     compareValue: 'abc'
    // }

    if (condition) {
      if (!collection.compareValue || !collection.compareValue.length) {
        return;
      }
      
      collectionRef = collectionRef.where(
        condition.fieldName,
        condition.operator,
        condition.compareValue
      );

    }

    const unsubscribe = collectionRef.onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setDocuments(documents);
      console.log('doc',documents,snapshot);
    });

    return unsubscribe;
  }, [collection, condition]);
  
  return documents;
};

export default UseFirestore;
