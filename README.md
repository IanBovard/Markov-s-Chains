# Markov-s-Chains

[ { OP: 'CHAT',
    message: {(1) message: 'Hi, i\'m bob.',
    username: 'bob' } },

  { OP: 'CHAT',
    message: {(2) message: 'Hi bob, i\'m steve',
    username: 'steve' } },

  { OP: 'CHAT',
    message: {(3) message: 'it\'s nice to meet you steve',
    username: 'bob' } },

  { OP: 'CHAT',
    message: {(4)message: 'what are you doing here, man...',
    username: 'bob' } },

  { OP: 'CHAT',
    message: {(5) message: 'Just Hanging OUT!.',
    username: 'steve' } },

  { OP: 'CHAT',

    message: {(6) message: 'woops! caps lock',
    username: 'steve' } },
  { OP: 'CHAT',

    message: {(7) message: 'whoa! forgiven.,.',
    username: 'bob' } } ]

order of chains

1 = trigger, 2 = response
2 = trigger, 3, 4 = response
3, 4 = trigger, 5, 6 = response
5, 6 = trigger, 7 = response (not sent to db yet)
