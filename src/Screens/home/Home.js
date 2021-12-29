import React, {Component, useEffect} from 'react';
import {View, Text} from 'react-native';
import R from '../../assets/R';
import HomeView from './HomeView';
import {showAlert, TYPE} from '../../components/DropdownAlert/index';
import {
    TIMETABLE,
    RESULTGRADE,
    EXAMCALENDAR,
    FINACE,
    REGISTERSUBJECT,
    SERVEY,
    EVALUATE,
    CURRICULUM,
    GRADUATION,
} from '../../routers/ScreenNames';

const listItem = [
    {
        id: '1',
        title: 'Sổ tiết kiệm',
        screen: TIMETABLE,
        icon: R.images.schedule,
    },
    {
        id: '2',
        title: 'Bảo hiểm',
        screen: RESULTGRADE,
        icon: R.images.grade,
    },
    {
        id: '5',
        title: 'Điểm danh',
        screen: REGISTERSUBJECT,
        icon: R.images.addEvent,
    },
    {
        id: '3',
        title: 'E-learning',
        screen: EXAMCALENDAR,
        icon: R.images.exam,
    }
];

const listItem2 = [
    {
        id: '4',
        title: 'Học tiếng anh',
        screen: FINACE,
        icon: R.images.receipt,
    },

    {
        id: '6',
        title: 'Dạy kèm',
        screen: EVALUATE,
        icon: R.images.notes,
    },
    {
        id: '8',
        title: 'Học bổng',
        screen: SERVEY,
        icon: R.images.satisfaction,
    },
    {
        id: '7',
        title: 'Học nhóm',
        screen: CURRICULUM,
        icon: R.images.company,
    },

    {
        id: '9',
        title: 'Mua vé xem phim',
        screen: GRADUATION,
        icon: R.images.mortarboard,
    },
]
const listBanner = [
    {
        id: '4',
        url: 'https://cdn.tgdd.vn/hoi-dap/1321785/banner-la-gi-khac-gi-voi-poster-cach-de-thiet-ke-mot%20(2).jpg'
    },

    {
        id: '6',
        url: 'https://cdn.tgdd.vn/hoi-dap/1321785/banner-la-gi-khac-gi-voi-poster-cach-de-thiet-ke-mot%20(2).jpg'
    },
    {
        id: '8',
        url: 'https://cdn.tgdd.vn/hoi-dap/1321785/banner-la-gi-khac-gi-voi-poster-cach-de-thiet-ke-mot%20(2).jpg'
    },
]

const Home = (props) => {
    return <HomeView listItem={listItem}
                     listItem2={listItem2}
                     listBanner={listBanner}/>;
};

export default Home;
