# Day 19 
### Rendering Based on Input - Filterable Product List
###### Dynamic Filtering in React:

- Use controlled input to capture user's search query

- Filter original data array using .filter() method

- Render filtered results, not the original array

- TypeScript ensures type safety for filter operations

#### Best Practices:

- Keep original data unchanged (immutable filtering)

- Filter in render (derived state) rather than storing filtered results

- Case-insensitive search using .toLowerCase()

- Support multiple filter criteria (search + category)

| Feature               | Implementation              | Benefit               |
| --------------------- | --------------------------- | --------------------- |
| Real-time Search      | Filter on every keystroke   | Instant feedback      |
| Multi-criteria Filter | Search + Category           | More precise results  |
| Case-insensitive      | .toLowerCase()comparison    | Better UX             |
| Performance           | useMemofor filtered results | Avoids re-computation |
| Type Safety           | TypeScript interfaces       | Compile-time checks   |
| Empty State           | "No products found" message | Clear user feedback   |
| Result Count          | Shows X of Y products       | Transparency          |

work:
- Add Price Range Filter: Add min/max price sliders
- Add Stock Filter: Toggle to show only in-stock items
- Add Sorting: Sort by price (low to high, high to low) or name (A-Z, Z-A)
- Debounce Search: Add 300ms delay before filtering (performance optimization for large datasets)
- Highlight Search Terms: Make matching text bold in results