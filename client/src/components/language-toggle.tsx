import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function LanguageToggle() {
    const { i18n } = useTranslation();

    const currentFlag = i18n.language === 'id' ? '🇮🇩' : '🇺🇸';

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                    <span className="text-xl">{currentFlag}</span>
                    <span className="sr-only">Toggle language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => i18n.changeLanguage('en')}>
                    English 🇺🇸
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => i18n.changeLanguage('id')}>
                    Bahasa Indonesia 🇮🇩
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
