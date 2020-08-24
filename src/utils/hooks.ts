/*
 * File: hooks.ts
 * Desc: 自定义hooks
 * File Created: 2020-08-24 22:45:40
 * Author: yezi
 * ------
 * Copyright 2020 - present, yezi
 */
import { useState } from 'react';

/**
 * 布尔开关
 * @param init
 */
export function useSwitch(init: boolean = false): [boolean, () => void, () => void] {
    const [switcher, setSwitcher] = useState(init);
    const turnOn = () => setSwitcher(true);
    const turnOff = () => setSwitcher(false);
    return [switcher, turnOn, turnOff];
}
