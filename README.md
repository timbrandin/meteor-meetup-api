Meetup API
=================

A Meetup API using Meteor Accounts user tokens instead of the Node.js plugin.

Here's an example how [@studiointeract](http://twitter.com/studiointeract) use it on http://nordic.meteor.com to get upcoming events for a users.

```
var user = Meteor.users.find({_id: __USERID__, "services.meetup": {$exists: 1}});
Meetup.get('2/events', {
  member_id: 'self',
  status: 'upcoming',
  rsvp: 'yes'
}, {user: user});
```
