import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import {
    CalendarProvider,
    ExpandableCalendar,
    AgendaList,
} from "react-native-calendars";

const formatDate = (date: Date) => date.toISOString().split("T")[0];

const todayDate = new Date();
const yesterdayDate = new Date(todayDate);
yesterdayDate.setDate(todayDate.getDate() - 1);
const tomorrowDate = new Date(todayDate);
tomorrowDate.setDate(todayDate.getDate() + 1);

const todayStr = formatDate(todayDate);
const yesterdayStr = formatDate(yesterdayDate);
const tomorrowStr = formatDate(tomorrowDate);

const agendaItems = [
    {
        title: yesterdayStr,
        data: [
            {
                title: "Morning Study Session",
                hour: "09:30",
                duration: "3h30",
                present: false,
            },
            {
                title: "Afternoon Study Session",
                hour: "14:00",
                duration: "3h30",
                present: true,
            },
        ],
    },
    {
        title: todayStr,
        data: [
            {
                title: "Morning Study Session",
                hour: "09:30",
                duration: "3h30",
                present: true,
            },
            {
                title: "Afternoon Study Session",
                hour: "14:00",
                duration: "3h30",
                present: true,
            },
        ],
    },
    {
        title: tomorrowStr,
        data: [
            {
                title: "Morning Study Session",
                hour: "09:30",
                duration: "3h30",
                present: null,
            },
            {
                title: "Afternoon Study Session",
                hour: "14:00",
                duration: "3h30",
                present: null,
            },
        ],
    },
];


const isNowInSession = (sessionHour: string, duration: string, selectedDate: string) => {
    if (selectedDate !== formatDate(new Date())) return false;

    const [hour, minute] = sessionHour.split(":").map(Number);
    const now = new Date();
    const start = new Date(now);
    start.setHours(hour, minute, 0, 0);

    const [dH, dM] = duration.split("h").map(Number);
    const end = new Date(start);
    end.setHours(start.getHours() + dH, start.getMinutes() + (dM || 0));

    return now >= start && now <= end;
};

export default function CalendarScreen() {
    const [selectedDate, setSelectedDate] = useState(todayStr);

    return (
        <View style={{ flex: 1 }}>
            <CalendarProvider date={selectedDate} onDateChanged={setSelectedDate}>
                <ExpandableCalendar
                    firstDay={1}
                    hideArrows={false}
                    hideKnob={false}
                    initialPosition="closed"
                    onDayPress={(day) => setSelectedDate(day.dateString)}
                />

                <AgendaList
                    sections={agendaItems.filter((section) => section.title === selectedDate)}
                    renderItem={({ item }) => {
                        let bgColor = "#e1f5fe";

                        if (item.present === true) bgColor = "#c8e6c9";
                        else if (item.present === false) bgColor = "#ffcdd2";
                        else if (item.present === null && isNowInSession(item.hour, item.duration, selectedDate)) bgColor = "#bbdefb";

                        return (
                            <View style={[styles.item, { backgroundColor: bgColor }]}>
                                <Text style={styles.title}>{item.title}</Text>
                                <Text>{item.hour} - Duration: {item.duration}</Text>
                            </View>
                        );
                    }}
                    keyExtractor={(item, index) => item.title + index}
                />
            </CalendarProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        borderRadius: 8,
        padding: 12,
        marginVertical: 5,
        marginHorizontal: 12,
    },
    title: {
        fontWeight: "bold",
        fontSize: 16,
    },
});
