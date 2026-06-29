import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        environment: "node",
        include: ["src/**/*.spec.ts"],
        setupFiles: ["./vitest.setup.ts"],
        coverage: {
            provider: "v8",
            reporter: ["text", "html"],
            include: ["src/**/*.ts", "mocks/**/*.ts"],
            exclude: ["src/**/*.spec.ts", "src/index.ts"],
        },
    },
});
