"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const categories = ["Educação", "Saúde", "Sustentabilidade", "Empreendedorismo", "Alimentação", "Tecnologia"]
const locations = ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Nordeste", "Amazônia", "Sul"]
const statusOptions = ["Ativo", "Totalmente Financiado", "Concluído"]

interface ProjectFiltersProps {
  selectedCategories: string[]
  setSelectedCategories: (categories: string[]) => void
  selectedLocations: string[]
  setSelectedLocations: (locations: string[]) => void
  selectedStatus: string[]
  setSelectedStatus: (status: string[]) => void
}

export function ProjectFilters({
  selectedCategories,
  setSelectedCategories,
  selectedLocations,
  setSelectedLocations,
  selectedStatus,
  setSelectedStatus,
}: ProjectFiltersProps) {
  const toggleCategory = (category: string) => {
    setSelectedCategories(
      selectedCategories.includes(category)
        ? selectedCategories.filter((c) => c !== category)
        : [...selectedCategories, category],
    )
  }

  const toggleLocation = (location: string) => {
    setSelectedLocations(
      selectedLocations.includes(location)
        ? selectedLocations.filter((l) => l !== location)
        : [...selectedLocations, location],
    )
  }

  const toggleStatus = (status: string) => {
    setSelectedStatus(
      selectedStatus.includes(status) ? selectedStatus.filter((s) => s !== status) : [...selectedStatus, status],
    )
  }

  const clearAllFilters = () => {
    setSelectedCategories([])
    setSelectedLocations([])
    setSelectedStatus([])
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Filtros</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Categories */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Categoria</Label>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={category}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <Label htmlFor={category} className="text-sm cursor-pointer">
                    {category}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Location */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Localização</Label>
            <div className="space-y-2">
              {locations.map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <Checkbox
                    id={location}
                    checked={selectedLocations.includes(location)}
                    onCheckedChange={() => toggleLocation(location)}
                  />
                  <Label htmlFor={location} className="text-sm cursor-pointer">
                    {location}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Status</Label>
            <div className="space-y-2">
              {statusOptions.map((status) => (
                <div key={status} className="flex items-center space-x-2">
                  <Checkbox
                    id={status}
                    checked={selectedStatus.includes(status)}
                    onCheckedChange={() => toggleStatus(status)}
                  />
                  <Label htmlFor={status} className="text-sm cursor-pointer">
                    {status}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <Button variant="outline" className="w-full bg-transparent" onClick={clearAllFilters}>
              Limpar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
