
# stack 

A Stack is a sequential collection of elements that follow the 𝗟𝗮𝘀𝘁 𝗜𝗻 𝗙𝗶𝗿𝘀𝘁 𝗢𝘂𝘁 (𝗟𝗜𝗙𝗢) principle. The addition and removal of elements take place at the same end, i.e. at the top. The newest elements are at the top, and the oldest elements are at the bottom.


We have many examples of stacks around us like 𝒇𝒐𝒓𝒘𝒂𝒓𝒅 & 𝒃𝒂𝒄𝒌 𝒃𝒖𝒕𝒕𝒐𝒏𝒔 𝒊𝒏 𝒕𝒉𝒆 𝒃𝒓𝒐𝒘𝒔𝒆𝒓 (𝑻𝒐 𝑵𝒂𝒗𝒊𝒈𝒂𝒕𝒆/𝑯𝒊𝒔𝒕𝒐𝒓𝒚), 𝑼𝒏𝒅𝒐 & 𝑹𝒆𝒅𝒐 𝒐𝒑𝒆𝒓𝒂𝒕𝒊𝒐𝒏𝒔 𝒊𝒏 𝑻𝒆𝒙𝒕 𝑬𝒅𝒊𝒕𝒐𝒓𝒔, 𝑪𝒂𝒍𝒍𝑺𝒕𝒂𝒄𝒌 𝒊𝒏 𝑱𝒂𝒗𝒂𝑺𝒄𝒓𝒊𝒑𝒕 𝒓𝒖𝒏𝒕𝒊𝒎𝒆, 𝒄𝒐𝒎𝒑𝒖𝒕𝒆𝒓 𝒎𝒆𝒎𝒐𝒓𝒚 𝒕𝒐 𝒔𝒕𝒐𝒓𝒆 𝒗𝒂𝒓𝒊𝒂𝒃𝒍𝒆𝒔 𝒂𝒏𝒅 𝒇𝒖𝒏𝒄𝒕𝒊𝒐𝒏 𝒄𝒂𝒍𝒍𝒔, 𝒂 𝒑𝒊𝒍𝒆 𝒐𝒇 𝒃𝒐𝒐𝒌𝒔, 𝒂𝒏𝒅 𝒂 𝒔𝒕𝒂𝒄𝒌 𝒐𝒇 𝒕𝒓𝒂𝒚𝒔 𝒐𝒓 𝒅𝒊𝒔𝒉𝒆𝒔.


𝗦𝘁𝗮𝗰𝗸 𝘃𝘀 𝗔𝗿𝗿𝗮𝘆
𝟏- In JavaScript, both Array and Stack are of non-primitive data type.
𝟐- Insertion and deletion in the Array can be done at any index whereas Insertion and deletion in Stack take place only from one end, i.e. at the top.
𝟑- Arrays can be of different types like 1D, 2D, and so on... whereas Stack has only one type.
𝟒- Random access to an element is allowed in Array whereas Random access to an element is not allowed in Stack as it follows the LIFO principle.
𝟓- We implement Stack using an Array whereas Array can't be implemented using a Stack as Stack follows the LIFO principle.


𝑫𝒊𝒇𝒇𝒆𝒓𝒆𝒏𝒕 𝒎𝒆𝒕𝒉𝒐𝒅𝒔 𝒊𝒎𝒑𝒍𝒆𝒎𝒆𝒏𝒕𝒆𝒅 𝒇𝒐𝒓 𝑺𝒕𝒂𝒄𝒌:

𝙥𝙪𝙨𝙝() - Adds an element to the top of the Stack.
𝙥𝙤𝙥() - Removes the top element of the Stack.
𝙥𝙚𝙚𝙠() - Returns the top element of the Stack.
𝙞𝙨𝙀𝙢𝙥𝙩𝙮() - Returns true if Stack is empty, false otherwise.
𝙘𝙡𝙚𝙖𝙧() - Removes all the elements from the Stack.
𝙨𝙞𝙯𝙚() - Returns the size/length of the Stack.
𝙥𝙧𝙞𝙣𝙩() - Returns all elements of the Stack.


𝐍𝐎𝐓𝐄: Stacks are iterable, So we can use 𝙢𝙖𝙥(), 𝙛𝙤𝙧𝙀𝙖𝙘𝙝() methods, and 𝙛𝙤𝙧 𝙤𝙛 𝙡𝙤𝙤𝙥.


# Queue 



A 𝗤𝘂𝗲𝘂𝗲 is a sequential collection of elements that follow the 𝗙𝗶𝗿𝘀𝘁 𝗜𝗻 𝗙𝗶𝗿𝘀𝘁 𝗢𝘂𝘁 (𝗙𝗜𝗙𝗢) principle. The first element inserted in the queue is the first element to be removed.


𝙍𝙚𝙖𝙡-𝙬𝙤𝙧𝙡𝙙 𝙖𝙥𝙥𝙡𝙞𝙘𝙖𝙩𝙞𝙤𝙣𝙨 𝙤𝙛 𝙖 𝙌𝙪𝙚𝙪𝙚:
• Javascript event loop keeps an internal callback queue to execute things in order
• When you put multiple file in a print queue, the files get printed based on first come first serve format.
• Vehicles on toll-tax bridge
• CPU task scheduling (first come first serve).
• Queue of people at ticket counter.
• Maintaining the playlist in media players.
• Queues are used in routers and switches


𝗔𝗿𝗿𝗮𝘆 𝘃𝘀 𝗤𝘂𝗲𝘂𝗲
𝟏- Both 𝗔𝗿𝗿𝗮𝘆 and 𝗤𝘂𝗲𝘂𝗲 are collections of elements.
𝟐- An 𝗔𝗿𝗿𝗮𝘆 is an indexed list that allows random read and writes whereas 𝗤𝘂𝗲𝘂𝗲 implements the FIFO principle.
𝟑- The only element you access in a 𝗤𝘂𝗲𝘂𝗲 is the first element by peeking or dequeuing it whereas you can access any element in an 𝗔𝗿𝗿𝗮𝘆.


𝗦𝘁𝗮𝗰𝗸 𝘃𝘀 𝗤𝘂𝗲𝘂𝗲
𝟏- The 𝗦𝘁𝗮𝗰𝗸 is based on LIFO(Last In First Out) principle whereas The 𝗤𝘂𝗲𝘂𝗲 is based on FIFO(First In First Out) principle.
𝟐- In 𝗦𝘁𝗮𝗰𝗸 insertion and deletion operation is called push and pop whereas in 𝗤𝘂𝗲𝘂𝗲 insertion and deletion operation is called enqueue and dequeue.
𝟑- In 𝗦𝘁𝗮𝗰𝗸, Push and Pop Operation takes place from one end (last/top) whereas in 𝗤𝘂𝗲𝘂𝗲, Enqueue and Dequeue Operation take place from a different end (last/top and front/bottom).
𝟒- 𝗦𝘁𝗮𝗰𝗸 is used to solve the recursive type problems whereas 𝗤𝘂𝗲𝘂𝗲 is used to solve the problem having sequential processing.


𝐃𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐞𝐭 𝐦𝐞𝐭𝐡𝐨𝐝𝐬 𝐢𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭𝐞𝐝 𝐟𝐨𝐫 𝐐𝐮𝐞𝐮𝐞:

𝙚𝙣𝙦𝙪𝙚𝙪𝙚() - Adds an element to the Queue.
𝙙𝙚𝙦𝙪𝙚𝙪𝙚() - Removes the first element of the Queue.
𝙥𝙚𝙚𝙠() - Returns the first element of the Queue.
𝙞𝙨𝙀𝙢𝙥𝙩𝙮() - Returns true if Queue is empty, false otherwise.
𝙘𝙡𝙚𝙖𝙧() - Clears the Queue.
𝙨𝙞𝙯𝙚() - Returns the size/length of the Queue.
𝙥𝙧𝙞𝙣𝙩() - Returns all elements of the Queue.


𝐍𝐎𝐓𝐄: Queues are iterable, So we can use 𝙢𝙖𝙥(), 𝙛𝙤𝙧𝙀𝙖𝙘𝙝() methods, and 𝙛𝙤𝙧 𝙤𝙛 𝙡𝙤𝙤𝙥.

# circular Queue  

Today in 𝗗𝗮𝘁𝗮 𝗦𝘁𝗿𝘂𝗰𝘁𝘂𝗿𝗲𝘀 𝗮𝗻𝗱 𝗔𝗹𝗴𝗼𝗿𝗶𝘁𝗵𝗺𝘀 journey using JavaScript, I studied 𝗖𝗶𝗿𝗰𝘂𝗹𝗮𝗿 𝗤𝘂𝗲𝘂𝗲 data structure and implemented its different methods to clear the concepts and understanding. Here is a quick summary from me.

A 𝗖𝗶𝗿𝗰𝘂𝗹𝗮𝗿 𝗤𝘂𝗲𝘂𝗲 is the extended version of a regular 𝗤𝘂𝗲𝘂𝗲 where the last element is connected to the first element. Thus forming a 𝐜𝐢𝐫𝐜𝐥𝐞-𝐥𝐢𝐤𝐞 structure. It is also called "𝐑𝐢𝐧𝐠 𝐁𝐮𝐟𝐟𝐞𝐫".

• The circular queue solves the major limitation of the normal Queue. In a normal queue, after a bit of insertion and deletion, there will be 𝙣𝙤𝙣-𝙪𝙨𝙖𝙗𝙡𝙚 𝙚𝙢𝙥𝙩𝙮 𝙨𝙥𝙖𝙘𝙚.

• The Circular queue is an efficient queue compared to the normal Queue. Here the size is fixed and it won't grow, 𝙩𝙝𝙚 𝙚𝙢𝙥𝙩𝙮 𝙗𝙡𝙤𝙘𝙠 𝙘𝙧𝙚𝙖𝙩𝙚𝙙 𝙙𝙪𝙧𝙞𝙣𝙜 𝙩𝙝𝙚 𝙙𝙚𝙦𝙪𝙚𝙪𝙚 𝙤𝙥𝙚𝙧𝙖𝙩𝙞𝙤𝙣 𝙞𝙨 𝙧𝙚𝙪𝙨𝙚𝙙.

• To implement the circular queue 𝙩𝙬𝙤 𝙥𝙤𝙞𝙣𝙩𝙚𝙧 𝙫𝙖𝙧𝙞𝙖𝙗𝙡𝙚𝙨 𝙖𝙧𝙚 𝙞𝙣𝙩𝙧𝙤𝙙𝙪𝙘𝙚𝙙 𝙩𝙝𝙚𝙮 𝙖𝙧𝙚 𝙛𝙧𝙤𝙣𝙩 𝙖𝙣𝙙 𝙧𝙚𝙖𝙧 which are used as reference variables to track which element is on the front and rear.

𝗔𝗽𝗽𝗹𝗶𝗰𝗮𝘁𝗶𝗼𝗻𝘀 𝗼𝗳 𝗖𝗶𝗿𝗰𝘂𝗹𝗮𝗿 𝗤𝘂𝗲𝘂𝗲:
Clock
Streaming Data
Traffic Management


𝗪𝗵𝘆 𝗱𝗼 𝗜 𝗻𝗲𝗲𝗱 𝗺𝗼𝗱𝘂𝗹𝗼 𝗼𝗽𝗲𝗿𝗮𝘁𝗶𝗼𝗻 𝗵𝗲𝗿𝗲?
The modulo operation is used to find the exact array position. When you have close look at the above code, when there is a enqueue or dequeue operation the reference variable gets incremented by one irrespective of array size. Doing the modulo operation will help us to find the exact position.
For example, the elements in the array are [1,2,3,4,5] and the value of front is 9 by doing modulo with array size (9 % 5) it will return back 4 so the next element to be dequeue is the index position of 4.


𝐃𝐢𝐟𝐟𝐞𝐫𝐞𝐧𝐞𝐭 𝐦𝐞𝐭𝐡𝐨𝐝𝐬 𝐢𝐦𝐩𝐥𝐞𝐦𝐞𝐧𝐭𝐞𝐝 𝐟𝐨𝐫 𝐐𝐮𝐞𝐮𝐞:

𝙚𝙣𝙦𝙪𝙚𝙪𝙚() - Adds an element to the end of the Queue.
𝙙𝙚𝙦𝙪𝙚𝙪𝙚() - Removes the first element of the Queue.
𝙥𝙚𝙚𝙠() - Returns the first element of the Queue.
𝙞𝙨𝙀𝙢𝙥𝙩𝙮() - Returns true if Queue is empty, false otherwise.
𝙞𝙨𝙁𝙪𝙡𝙡() - Returns true if Queue is full, false otherwise.
𝙘𝙡𝙚𝙖𝙧() - Clears the Queue.
𝙨𝙞𝙯𝙚() - Returns the size/length of the Queue.
𝙥𝙧𝙞𝙣𝙩() - Returns all elements of the Queue.