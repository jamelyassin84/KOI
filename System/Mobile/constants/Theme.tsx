import Colors from './Colors';
import useColorScheme from '../hooks/useColorScheme';

export function textColor() {
    const colorScheme = useColorScheme();
    return { color: Colors[ colorScheme ].text }
}