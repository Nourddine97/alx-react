import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import { getLatestNotification } from '../utils/utils';

describe('<Notification />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<Notifications />);
    shallow(<Notifications />);
  });

  it('Notification Item with html', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toBeDefined();
  });

  it('menuItem with displayDrawer false', () => {
    const wrapper = shallow(<Notifications />);
    const mItem = wrapper.find('div.menuItem');
    expect(mItem).toHaveLength(1);
  });

  it('Notification with displayDrawer false', () => {
    const wrapper = shallow(<Notifications />);
    const dNoti = wrapper.find('div.Notifications');
    expect(dNoti).toHaveLength(0);
  });

  it('menuItem with displayDrawer true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const mItem = wrapper.find('div.menuItem');
    expect(mItem).toHaveLength(1);
  });

  it('displayDrawer is true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    const dNoti = wrapper.find('div.Notifications');
    expect(dNoti).toHaveLength(1);
  });
});

describe('listNotifications with values', () => {
  let latestNotification = undefined;
  let listNotifications = undefined;

  beforeEach(() => {
    latestNotification = getLatestNotification();
    listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: latestNotification } },
    ];
  });

  it('values', () => {
    const wrapper = shallow(
      <Notifications displayDrawer listNotifications={listNotifications} />
    );
    expect(wrapper.exists());
    const nItem = wrapper.find('NotificationItem');
    expect(nItem).toBeDefined();

