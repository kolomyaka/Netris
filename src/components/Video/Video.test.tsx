import { screen } from "@testing-library/react";

import { Video } from "@/components/Video/Video";
import { componentRender } from "@/utils/tests/componentRender/componentRender";


describe("Тестирование видео компонента", () => {

    test("Отображение прямоугольника", () => {
        componentRender(<Video />, {
            initialState: {
                events: {
                    activeEvents: [
                        {
                            id: 0,
                            zone: {
                                left: 350,
                                top: 70,
                                width: 120,
                                height: 80
                            }
                        }
                    ]
                }
            }
        });
        expect(screen.getByTestId("ActiveEvent")).toBeInTheDocument();
    });

    test("Отображение нескольких прямоугольников", () => {
        const activeEvents = [
            {
                id: 0,
                zone: {
                    left: 350,
                    top: 70,
                    width: 120,
                    height: 80
                }
            },
            {
                id: 1,
                zone: {
                    left: 150,
                    top: 250,
                    width: 320,
                    height: 180
                }
            },];
        componentRender(<Video />, {
            initialState: {
                events: {
                    activeEvents
                }
            }
        });

        const items = screen.getAllByTestId("ActiveEvent");
        expect(items).toHaveLength(2);
    });

    test("Отображение прямоугольников, если нет активных евентов", () => {
        componentRender(<Video />, {
            initialState: {
                events: {
                    activeEvents: []
                }
            }
        });

        expect(screen.queryByTestId("ActiveEvent")).not.toBeInTheDocument();
    });

});