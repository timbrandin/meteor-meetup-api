Meetup API
=================

A Meetup API using [Meteor Accounts](https://atmospherejs.com/meteor/accounts-meetup) user tokens instead of the [Meetup NPM plugin](https://www.npmjs.org/package/meetup-api).

Here's an example how [@studiointeract](http://twitter.com/studiointeract) use it on http://nordic.meteor.com to get upcoming events for a users.

```
var user = Meteor.users.findOne({_id: __USERID__, "services.meetup": {$exists: 1}});
Meetup.get('2/events', {
  member_id: 'self',
  status: 'upcoming',
  rsvp: 'yes'
}, {user: user._id});
```
