'use strict';
var admin = require('firebase-admin');
const {WebhookClient} = require('dialogflow-fulfillment');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request-promise');
process.env.DEBUG = 'actions-on-google';
const LINE_HEADER = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer mViQ4VLctG0OIVGh5tULIezFkOezM0SG9ysQ7uatbJvhAel76S0/EqHb8jsX5CZwqBWwf/BiD6L7GnMMNIaJVCQRkm/geE8DL30uwucSUFCCo/B1PRkuk6jQmgs+GSti/UfOE5qOtCt/qHUGUeLTagdB04t89/1O/w1cDnyilFU='
};
const LINE_MESSAGING_API = 'https://api.line.me/v2/bot/message';


const pushRoom = (ID , date, color,head) => {
  return request({
    method: 'POST',
    uri: LINE_MESSAGING_API+'/push',
    headers: LINE_HEADER,
    body: JSON.stringify({
      to: ID,
      messages: [
        {
        
            type: "flex",
            altText: "This is a Flex message",
            contents: {
              type: "carousel",
              contents: [
                {
                  type: "bubble",
                  styles: {
                    header: {
                      backgroundColor: "#2E8B57"
                    }
                  },
                  header: {
                    type: "box",
                    layout: "vertical",
                    contents: [
                      {
                        type: "text",
                        color:"#FFFFFF",
                        text: head,
                        weight: "bold",
                        size: "xl"
                      }
                    ]
                  },
                  body: {
                    type: "box",
                    layout: "vertical",
                    margin:"sm",
                    contents: [
                      {
                        type: "box",
                        layout: "horizontal",
                        contents: [
                          {
                            type: "text",
                            text: "8:30 - 9:20",
                          },
                          {
                            type: "text",
                            color: color[1],
                            text: date[1],
                            align: "end",
                          }
                        ]
                      },
                      
                      {
                        type: "separator",
                        margin:"sm"
                      },
                      {
                        type: "box",
                        margin:"sm",
                        layout: "horizontal",
                        contents: [
                          {
                            type: "text",
                            text: "9:25 - 10:15",
                          },
                          {
                            type: "text",
                            color: color[2],
                            text: date[2],
                            align: "end",
                            
                          }
                        ]
                      },
                      
                      {
                        type: "separator",
                        margin:"sm"
                      },{
                        type: "box",
                        margin:"sm",
                        layout: "horizontal",
                        contents: [
                          {
                            type: "text",
                            text: "10:20 - 11:10",
                          },
                          {
                            type: "text",
                            text: date[3],
                            color: color[3],
                            align: "end",
                          }
                        ]
                      },
                      
                      {
                        type: "separator",
                        margin:"sm"
                      },{
                        type: "box",
                        margin:"sm",
                        layout: "horizontal",
                        contents: [
                          {
                            type: "text",
                            text: "11:15 - 12:05",
                          },
                          {
                            type: "text",
                            text: date[4],
                            color: color[4],
                            align: "end",
                          }
                        ]
                      },
                      
                      {
                        type: "separator",
                        margin:"sm"
                      }
                      ,{
                        type: "box",
                        margin:"sm",
                        layout: "horizontal",
                        contents: [
                          {
                            type: "text",
                            text: "12:05 - 13:00",
                          },
                          {
                            type: "text",
                            text: date[5],
                            color: color[5],
                            align: "end",
                          }
                        ]
                      },
                      
                      {
                        type: "separator",
                        margin:"sm"
                      }
                      ,{
                        type: "box",
                        margin:"sm",
                        layout: "horizontal",
                        contents: [
                          {
                            type: "text",
                            text: "13:00 - 13:50",
                          },
                          {
                            type: "text",
                            text: date[6],
                            color: color[6],
                            align: "end",
                          }
                        ]
                      },
                      
                      {
                        type: "separator",
                        margin:"sm"
                      }
                      ,{
                        type: "box",
                        margin:"sm",
                        layout: "horizontal",
                        contents: [
                          {
                            type: "text",
                            text: "13:55 - 14:45",
                          },
                          {
                            type: "text",
                            text: date[7],
                            color: color[7],
                            align: "end",
                          }
                        ]
                      },
                      
                      {
                        type: "separator",
                        margin:"sm"
                      }
                      ,{
                        type: "box",
                        margin:"sm",
                        layout: "horizontal",
                        contents: [
                          {
                            type: "text",
                            text: "14:50 - 15:40",
                          },
                          {
                            type: "text",
                            text: date[8],
                            color: color[8],
                            align: "end",
                          }
                        ]
                      },
                      
                      {
                        type: "separator",
                        margin:"sm"
                      }
                      ,{
                        type: "box",
                        margin:"sm",
                        layout: "horizontal",
                        contents: [
                          {
                            type: "text",
                            text: "15:45 - 16:35",
                          },
                          {
                            type: "text",
                            text: date[9],
                            color: color[9],
                            align: "end",
                          }
                        ]
                      },
                      
                      {
                        type: "separator",
                        margin:"sm"
                      }
                      ,{
                        type: "box",
                        margin:"sm",
                        layout: "horizontal",
                        contents: [
                          {
                            type: "text",
                            text: "16:40 - 17:30",
                          },
                          {
                            type: "text",
                            text: date[10],
                            color: color[10],
                            align: "end",
                          }
                        ]
                      },
                      
                      {
                        type: "separator",
                        margin:"sm"
                      }
                      ,{
                        type: "box",
                        margin:"sm",
                        layout: "horizontal",
                        contents: [
                          {
                            type: "text",
                            text: "17:35 - 18:25",
                          },
                          {
                            type: "text",
                            color: color[11],
                            text: date[11],
                            align: "end",
                          }
                        ]
                      },
                      
                      {
                        type: "separator",
                        margin:"sm"
                      }
                    ]
                  }
                }
              ]
            }
        }
      ]
    })
  }).then(() => {
    return res.status(200);//res.status(200).send(Done);
  }).catch((error) => {
    return ;
  });
}
const pushGoodNight = (ID) => {
  return request({
    method: 'POST',
    uri: LINE_MESSAGING_API+'/push',
    headers: LINE_HEADER,
    body: JSON.stringify({
      to: ID,
      messages: [
       {
        type : "text",
        text : "ฝันดีคร้าบบ คร่อกก zzZZZ"
      } ,
      {
          type: "sticker",
          packageId: "1",
          stickerId: "1"
      }
      ]
    })
  }).then(() => {
    return res.status(200);//res.status(200).send(Done);
  }).catch((error) => {
    return ;
  });
}

const server = express();
server.use(bodyParser.urlencoded({
    extended: true
}));

server.use(bodyParser.json());

var serviceAccount = require("./botdbkey.json");
 
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://codie-91be8.firebaseio.com"
});

var db = admin.database();
var ref = db.ref("/");


function test(msg) {
  console.log("Hello Realtime database");

	/*
  	//SELECT * profile WHERE id = U6733b19e487ac9a823d742eafdf3a365
	var itemRef = ref.child("profile");
	itemRef.child("Ud3375351be60efc187b3f137a32b66aa").on("value", function(snapshot) {
	  let id= snapshot.val();
	  console.log(id);
    });
  
    //SELECT * FROM profile WHERE name = "อาจารย์พู่";
    var itemRef = ref.child("profile");
    itemRef.orderByChild("name").equalTo("อาจารย์พู่").on("value", function(snapshot) {
  	  let profile = snapshot.val();
  	  console.log(profile);
  	  //console.log(event['-LMwnQSUOXiKj1WYQp8z'].type);
        //snapshot.forEach(function(data) {
        //    console.log(event[data.key].type);
        //});
    });
	
	//SELECT * FROM profile LIMIT 10
    var itemRef = ref.child("profile");
    itemRef.orderByKey().limitToFirst(10).on("value", function(snapshot) {
  	  let profile = snapshot.val();
  	  console.log(profile);
  	 
    });
	*/
	//SELECT * FROM profile WHERE type = "admin" && profileCreatedTime = "9/19/2018, 3:09:48 PM";
	

  
    //create new table
    
    var itemRef = ref.child("test");
    var newItemRef = itemRef.push();
    newItemRef.set({
      "User ID": msg,
      "Message": 'Hello Firebase Database',
      "Message Created Time": new Date().toString()
    });
 
    var itemId = newItemRef.key;
    console.log("A new item with ID " + itemId + " is created."); 
	/*
  
    */
}

server.post('/',function (request,response) {
  const agent = new WebhookClient({ request, response });
  
    //const number = agent.parameters.number;

  function intentGoodnight(agent){
   // console.log(agent.originalRequest.payload.data.source.userId);
      pushGoodNight(agent.originalRequest.payload.data.source.userId);
  }
  function intentNews(agent){
    // console.log(agent.originalRequest.payload.data.source.userId);
     pushNews(agent.originalRequest.payload.data.source.userId);
   }
  function welcome(agent) {
    console.log(agent.originalRequest.payload.data.source);
    agent.add(`Welcome to my agent!`);
  }

 
  function fallback(agent) {
    agent.add(`I didn't understand`);
    agent.add(`I'm sorry, can you try again?`);
  }
 
  function intentRoom(agent){
    var roomNumber = ""+agent.parameters.roomNumber;
    console.log(roomNumber);
    var date = agent.parameters.date;
    var head = roomNumber + " " + date;
    var itemRef = ref.child("room").child(roomNumber).child(date);

    itemRef.on("value", function(snapshot) {
      let id= snapshot.val();
      var color=[];
      for(var i = 1; i <=11 ; i++){
        if(id[i] == "free"){
          color[i] = "#1ca501";
        }else{
          color[i] = "#ff0a0a";
        }
        
      }
      pushRoom(agent.originalRequest.payload.data.source.userId,id,color,head);
      });

  }
  
  let intentMap = new Map();
  
  intentMap.set('Default Welcome Intent', welcome);
  intentMap.set('Default Fallback Intent', fallback);
   intentMap.set('Good night', intentGoodnight);
  intentMap.set('News', intentNews);
  intentMap.set('checkRoom', intentRoom);
  agent.handleRequest(intentMap);
});

server.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});
