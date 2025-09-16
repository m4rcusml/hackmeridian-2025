"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"

const categories = ["Educação", "Saúde", "Sustentabilidade", "Empreendedorismo", "Alimentação", "Tecnologia"]

const locations = ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Nordeste", "Amazônia", "Sul"]

export function ProjectFilters() {
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
                  <Checkbox id={category} />
                  <Label htmlFor={category} className="text-sm">
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
                  <Checkbox id={location} />
                  <Label htmlFor={location} className="text-sm">
                    {location}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <Label className="text-sm font-medium mb-3 block">Status</Label>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Checkbox id="ativo" />
                <Label htmlFor="ativo" className="text-sm">
                  Ativo
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="financiado" />
                <Label htmlFor="financiado" className="text-sm">
                  Totalmente Financiado
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox id="concluido" />
                <Label htmlFor="concluido" className="text-sm">
                  Concluído
                </Label>
              </div>
            </div>
          </div>

          <div className="pt-4 space-y-2">
            <Button className="w-full">Aplicar Filtros</Button>
            <Button variant="outline" className="w-full bg-transparent">
              Limpar Filtros
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
